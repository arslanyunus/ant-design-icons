// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudConnectionTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudConnectionTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudConnectionTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudConnectionTwoTone: CloudConnectionTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudConnectionTwoToneSvg}></AntdIcon>;
};

CloudConnectionTwoTone.displayName = 'CloudConnectionTwoTone';
CloudConnectionTwoTone.inheritAttrs = false;
export default CloudConnectionTwoTone;