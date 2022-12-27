// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSquareTwoTone: BookSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSquareTwoToneSvg}></AntdIcon>;
};

BookSquareTwoTone.displayName = 'BookSquareTwoTone';
BookSquareTwoTone.inheritAttrs = false;
export default BookSquareTwoTone;