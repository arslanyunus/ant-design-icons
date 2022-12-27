// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExternalDriveBulkSvg from '@ant-design/icons-svg/lib/asn/ExternalDriveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExternalDriveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExternalDriveBulk: ExternalDriveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExternalDriveBulkSvg}></AntdIcon>;
};

ExternalDriveBulk.displayName = 'ExternalDriveBulk';
ExternalDriveBulk.inheritAttrs = false;
export default ExternalDriveBulk;