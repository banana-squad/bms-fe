import type { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { v4 as uuid } from 'uuid';

export type ModalPromise<T = unknown> = {
  resolve(value: T): void;
  reject(reason: unknown): void;
};

export type ModalState<T = unknown> = ModalPromise<T> & {
  id: string;
  Component: FunctionComponent<ModalPromise<T> & Record<string, any>>;
  props: Record<string, unknown>;
};

export class ModalController {
  private modalState: ModalState[] = [];

  constructor(private flushState: unknown) {
  }

  get top(): ModalState {
    return this.modalState[this.modalState.length - 1];
  }

  get isModal() {
    return this.modalState.length > 0;
  }

  protected flush() {
    const [, setFlush] = this.flushState as [number, Dispatch<SetStateAction<number>>];
    setFlush(prev => prev + 1);
  }

  async push<T>(id: ModalState['id'], Component?: ModalState['Component'], props?: ModalState['props']): Promise<T>;
  async push<T>(Component: ModalState['Component'], props?: ModalState['props']): Promise<T>;
  async push<T>(id: ModalState['Component'] | ModalState['id'], Component?: ModalState['Component'] | ModalState['props'], props?: ModalState['props']): Promise<T> {
    let modalId: ModalState['id'];
    let modalComponent: ModalState['Component'];
    let modalProps: ModalState['props'];

    if (typeof id === 'string') {
      modalId = id;
      modalComponent = Component as ModalState['Component'];
      modalProps = props as ModalState['props'];
    } else {
      modalId = uuid();
      modalComponent = id as ModalState['Component'];
      modalProps = Component as ModalState['props'];
    }

    return new Promise((resolve, reject) => {
      this.toggleDisableScroll();

      this.modalState.push({
        id: modalId,
        Component: modalComponent,
        props: modalProps,
        resolve: value => this.handleModal(modalId, resolve, value),
        reject: value => this.handleModal(modalId, reject, value),
      });
      this.flush();
    });
  }

  pop() {
    this.toggleDisableScroll();

    this.top?.reject(`Modal closed: ${this.top.id}`);
    this.modalState.pop();
    this.flush();
  }

  clear() {
    while (this.top) this.pop();
  }

  private async handleModal(id: ModalState['id'], resolver: ModalState['resolve'], value: unknown) {
    resolver(value);

    this.modalState = this.modalState.filter((state) => state.id !== id);
    this.flush();
  }

  private toggleDisableScroll() {
    document.body.style.overflowY = this.isModal ? 'hidden' : '';
  }
}
