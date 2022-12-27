// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Book1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Book1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Book1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Book1TwoTone: Book1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Book1TwoToneSvg}></AntdIcon>;
};

Book1TwoTone.displayName = 'Book1TwoTone';
Book1TwoTone.inheritAttrs = false;
export default Book1TwoTone;