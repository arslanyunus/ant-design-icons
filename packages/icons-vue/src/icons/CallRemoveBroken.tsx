// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/CallRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallRemoveBroken: CallRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallRemoveBrokenSvg}></AntdIcon>;
};

CallRemoveBroken.displayName = 'CallRemoveBroken';
CallRemoveBroken.inheritAttrs = false;
export default CallRemoveBroken;