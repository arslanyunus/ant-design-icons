// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Book1BrokenSvg from '@ant-design/icons-svg/lib/asn/Book1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Book1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Book1Broken: Book1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Book1BrokenSvg}></AntdIcon>;
};

Book1Broken.displayName = 'Book1Broken';
Book1Broken.inheritAttrs = false;
export default Book1Broken;