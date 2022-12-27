// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/CallMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallMinusOutline: CallMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallMinusOutlineSvg}></AntdIcon>;
};

CallMinusOutline.displayName = 'CallMinusOutline';
CallMinusOutline.inheritAttrs = false;
export default CallMinusOutline;