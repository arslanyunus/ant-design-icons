// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodsBulkSvg from '@ant-design/icons-svg/lib/asn/AirpodsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodsBulk: AirpodsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodsBulkSvg}></AntdIcon>;
};

AirpodsBulk.displayName = 'AirpodsBulk';
AirpodsBulk.inheritAttrs = false;
export default AirpodsBulk;