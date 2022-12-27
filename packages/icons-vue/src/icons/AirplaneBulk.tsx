// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneBulkSvg from '@ant-design/icons-svg/lib/asn/AirplaneBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneBulk: AirplaneBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneBulkSvg}></AntdIcon>;
};

AirplaneBulk.displayName = 'AirplaneBulk';
AirplaneBulk.inheritAttrs = false;
export default AirplaneBulk;