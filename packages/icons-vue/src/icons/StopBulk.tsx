// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopBulkSvg from '@ant-design/icons-svg/lib/asn/StopBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopBulk: StopBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopBulkSvg}></AntdIcon>;
};

StopBulk.displayName = 'StopBulk';
StopBulk.inheritAttrs = false;
export default StopBulk;