// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SubtitleBoldSvg from '@ant-design/icons-svg/lib/asn/SubtitleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SubtitleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SubtitleBold: SubtitleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubtitleBoldSvg}></AntdIcon>;
};

SubtitleBold.displayName = 'SubtitleBold';
SubtitleBold.inheritAttrs = false;
export default SubtitleBold;