// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExternalDriveBrokenSvg from '@ant-design/icons-svg/lib/asn/ExternalDriveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExternalDriveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExternalDriveBroken: ExternalDriveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExternalDriveBrokenSvg}></AntdIcon>;
};

ExternalDriveBroken.displayName = 'ExternalDriveBroken';
ExternalDriveBroken.inheritAttrs = false;
export default ExternalDriveBroken;