// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Scissor1BulkSvg from '@ant-design/icons-svg/lib/asn/Scissor1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Scissor1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Scissor1Bulk: Scissor1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Scissor1BulkSvg}></AntdIcon>;
};

Scissor1Bulk.displayName = 'Scissor1Bulk';
Scissor1Bulk.inheritAttrs = false;
export default Scissor1Bulk;