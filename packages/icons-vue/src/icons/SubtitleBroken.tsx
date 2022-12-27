// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SubtitleBrokenSvg from '@ant-design/icons-svg/lib/asn/SubtitleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SubtitleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SubtitleBroken: SubtitleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubtitleBrokenSvg}></AntdIcon>;
};

SubtitleBroken.displayName = 'SubtitleBroken';
SubtitleBroken.inheritAttrs = false;
export default SubtitleBroken;