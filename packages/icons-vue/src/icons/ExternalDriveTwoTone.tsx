// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExternalDriveTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExternalDriveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExternalDriveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExternalDriveTwoTone: ExternalDriveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExternalDriveTwoToneSvg}></AntdIcon>;
};

ExternalDriveTwoTone.displayName = 'ExternalDriveTwoTone';
ExternalDriveTwoTone.inheritAttrs = false;
export default ExternalDriveTwoTone;