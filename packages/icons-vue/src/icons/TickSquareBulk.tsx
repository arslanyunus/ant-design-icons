// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickSquareBulkSvg from '@ant-design/icons-svg/lib/asn/TickSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickSquareBulk: TickSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickSquareBulkSvg}></AntdIcon>;
};

TickSquareBulk.displayName = 'TickSquareBulk';
TickSquareBulk.inheritAttrs = false;
export default TickSquareBulk;