// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Book1LinearSvg from '@ant-design/icons-svg/lib/asn/Book1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Book1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Book1Linear: Book1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Book1LinearSvg}></AntdIcon>;
};

Book1Linear.displayName = 'Book1Linear';
Book1Linear.inheritAttrs = false;
export default Book1Linear;