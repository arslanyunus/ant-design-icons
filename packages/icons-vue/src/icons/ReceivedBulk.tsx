// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceivedBulkSvg from '@ant-design/icons-svg/lib/asn/ReceivedBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceivedBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceivedBulk: ReceivedBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceivedBulkSvg}></AntdIcon>;
};

ReceivedBulk.displayName = 'ReceivedBulk';
ReceivedBulk.inheritAttrs = false;
export default ReceivedBulk;