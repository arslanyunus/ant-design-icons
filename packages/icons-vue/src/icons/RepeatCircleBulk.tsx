// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatCircleBulkSvg from '@ant-design/icons-svg/lib/asn/RepeatCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatCircleBulk: RepeatCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatCircleBulkSvg}></AntdIcon>;
};

RepeatCircleBulk.displayName = 'RepeatCircleBulk';
RepeatCircleBulk.inheritAttrs = false;
export default RepeatCircleBulk;