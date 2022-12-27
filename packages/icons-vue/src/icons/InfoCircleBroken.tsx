// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/InfoCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoCircleBroken: InfoCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleBrokenSvg}></AntdIcon>;
};

InfoCircleBroken.displayName = 'InfoCircleBroken';
InfoCircleBroken.inheritAttrs = false;
export default InfoCircleBroken;