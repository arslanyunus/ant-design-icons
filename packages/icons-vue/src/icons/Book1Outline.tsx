// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Book1OutlineSvg from '@ant-design/icons-svg/lib/asn/Book1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Book1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Book1Outline: Book1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Book1OutlineSvg}></AntdIcon>;
};

Book1Outline.displayName = 'Book1Outline';
Book1Outline.inheritAttrs = false;
export default Book1Outline;