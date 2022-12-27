// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartCarBulkSvg from '@ant-design/icons-svg/lib/asn/SmartCarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartCarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartCarBulk: SmartCarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartCarBulkSvg}></AntdIcon>;
};

SmartCarBulk.displayName = 'SmartCarBulk';
SmartCarBulk.inheritAttrs = false;
export default SmartCarBulk;