// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/CallRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallRemoveBold: CallRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallRemoveBoldSvg}></AntdIcon>;
};

CallRemoveBold.displayName = 'CallRemoveBold';
CallRemoveBold.inheritAttrs = false;
export default CallRemoveBold;