// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ranking1BulkSvg from '@ant-design/icons-svg/lib/asn/Ranking1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ranking1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ranking1Bulk: Ranking1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ranking1BulkSvg}></AntdIcon>;
};

Ranking1Bulk.displayName = 'Ranking1Bulk';
Ranking1Bulk.inheritAttrs = false;
export default Ranking1Bulk;