// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceivedBrokenSvg from '@ant-design/icons-svg/lib/asn/ReceivedBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceivedBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceivedBroken: ReceivedBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceivedBrokenSvg}></AntdIcon>;
};

ReceivedBroken.displayName = 'ReceivedBroken';
ReceivedBroken.inheritAttrs = false;
export default ReceivedBroken;