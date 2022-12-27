// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickCircleBulkSvg from '@ant-design/icons-svg/lib/asn/TickCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickCircleBulk: TickCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickCircleBulkSvg}></AntdIcon>;
};

TickCircleBulk.displayName = 'TickCircleBulk';
TickCircleBulk.inheritAttrs = false;
export default TickCircleBulk;