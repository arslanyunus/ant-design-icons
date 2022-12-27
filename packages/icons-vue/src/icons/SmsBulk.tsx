// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsBulkSvg from '@ant-design/icons-svg/lib/asn/SmsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsBulk: SmsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsBulkSvg}></AntdIcon>;
};

SmsBulk.displayName = 'SmsBulk';
SmsBulk.inheritAttrs = false;
export default SmsBulk;