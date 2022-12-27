// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExternalDriveBoldSvg from '@ant-design/icons-svg/lib/asn/ExternalDriveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExternalDriveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExternalDriveBold: ExternalDriveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExternalDriveBoldSvg}></AntdIcon>;
};

ExternalDriveBold.displayName = 'ExternalDriveBold';
ExternalDriveBold.inheritAttrs = false;
export default ExternalDriveBold;