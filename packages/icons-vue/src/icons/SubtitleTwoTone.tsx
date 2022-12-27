// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SubtitleTwoToneSvg from '@ant-design/icons-svg/lib/asn/SubtitleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SubtitleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SubtitleTwoTone: SubtitleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubtitleTwoToneSvg}></AntdIcon>;
};

SubtitleTwoTone.displayName = 'SubtitleTwoTone';
SubtitleTwoTone.inheritAttrs = false;
export default SubtitleTwoTone;