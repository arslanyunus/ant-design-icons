// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignRightBrokenSvg from '@ant-design/icons-svg/lib/asn/TextalignRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignRightBroken: TextalignRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignRightBrokenSvg}></AntdIcon>;
};

TextalignRightBroken.displayName = 'TextalignRightBroken';
TextalignRightBroken.inheritAttrs = false;
export default TextalignRightBroken;