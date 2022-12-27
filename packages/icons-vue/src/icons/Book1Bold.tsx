// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Book1BoldSvg from '@ant-design/icons-svg/lib/asn/Book1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Book1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Book1Bold: Book1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Book1BoldSvg}></AntdIcon>;
};

Book1Bold.displayName = 'Book1Bold';
Book1Bold.inheritAttrs = false;
export default Book1Bold;