// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignCenterBrokenSvg from '@ant-design/icons-svg/lib/asn/TextalignCenterBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignCenterBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignCenterBroken: TextalignCenterBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignCenterBrokenSvg}></AntdIcon>;
};

TextalignCenterBroken.displayName = 'TextalignCenterBroken';
TextalignCenterBroken.inheritAttrs = false;
export default TextalignCenterBroken;