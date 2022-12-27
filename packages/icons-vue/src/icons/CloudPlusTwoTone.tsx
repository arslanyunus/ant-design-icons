// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudPlusTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudPlusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudPlusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudPlusTwoTone: CloudPlusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudPlusTwoToneSvg}></AntdIcon>;
};

CloudPlusTwoTone.displayName = 'CloudPlusTwoTone';
CloudPlusTwoTone.inheritAttrs = false;
export default CloudPlusTwoTone;