// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodBulkSvg from '@ant-design/icons-svg/lib/asn/AirpodBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodBulk: AirpodBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodBulkSvg}></AntdIcon>;
};

AirpodBulk.displayName = 'AirpodBulk';
AirpodBulk.inheritAttrs = false;
export default AirpodBulk;