// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopCircleBulkSvg from '@ant-design/icons-svg/lib/asn/StopCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopCircleBulk: StopCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopCircleBulkSvg}></AntdIcon>;
};

StopCircleBulk.displayName = 'StopCircleBulk';
StopCircleBulk.inheritAttrs = false;
export default StopCircleBulk;