// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallMinusBoldSvg from '@ant-design/icons-svg/lib/asn/CallMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallMinusBold: CallMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallMinusBoldSvg}></AntdIcon>;
};

CallMinusBold.displayName = 'CallMinusBold';
CallMinusBold.inheritAttrs = false;
export default CallMinusBold;