// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoCircleOutline: InfoCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleOutlineSvg}></AntdIcon>;
};

InfoCircleOutline.displayName = 'InfoCircleOutline';
InfoCircleOutline.inheritAttrs = false;
export default InfoCircleOutline;