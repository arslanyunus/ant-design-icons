// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleBoldSvg from '@ant-design/icons-svg/lib/asn/InfoCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoCircleBold: InfoCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleBoldSvg}></AntdIcon>;
};

InfoCircleBold.displayName = 'InfoCircleBold';
InfoCircleBold.inheritAttrs = false;
export default InfoCircleBold;