// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudMinusTwoTone: CloudMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudMinusTwoToneSvg}></AntdIcon>;
};

CloudMinusTwoTone.displayName = 'CloudMinusTwoTone';
CloudMinusTwoTone.inheritAttrs = false;
export default CloudMinusTwoTone;