// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignCenterBoldSvg from '@ant-design/icons-svg/lib/asn/TextalignCenterBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignCenterBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignCenterBold: TextalignCenterBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignCenterBoldSvg}></AntdIcon>;
};

TextalignCenterBold.displayName = 'TextalignCenterBold';
TextalignCenterBold.inheritAttrs = false;
export default TextalignCenterBold;