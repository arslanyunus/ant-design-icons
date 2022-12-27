// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SubtitleOutlineSvg from '@ant-design/icons-svg/lib/asn/SubtitleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SubtitleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SubtitleOutline: SubtitleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubtitleOutlineSvg}></AntdIcon>;
};

SubtitleOutline.displayName = 'SubtitleOutline';
SubtitleOutline.inheritAttrs = false;
export default SubtitleOutline;