// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignRightBoldSvg from '@ant-design/icons-svg/lib/asn/TextalignRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignRightBold: TextalignRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignRightBoldSvg}></AntdIcon>;
};

TextalignRightBold.displayName = 'TextalignRightBold';
TextalignRightBold.inheritAttrs = false;
export default TextalignRightBold;