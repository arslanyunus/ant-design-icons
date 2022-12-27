// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceivedBoldSvg from '@ant-design/icons-svg/lib/asn/ReceivedBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceivedBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceivedBold: ReceivedBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceivedBoldSvg}></AntdIcon>;
};

ReceivedBold.displayName = 'ReceivedBold';
ReceivedBold.inheritAttrs = false;
export default ReceivedBold;