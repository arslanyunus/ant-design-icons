// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SubtitleBulkSvg from '@ant-design/icons-svg/lib/asn/SubtitleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SubtitleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SubtitleBulk: SubtitleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubtitleBulkSvg}></AntdIcon>;
};

SubtitleBulk.displayName = 'SubtitleBulk';
SubtitleBulk.inheritAttrs = false;
export default SubtitleBulk;