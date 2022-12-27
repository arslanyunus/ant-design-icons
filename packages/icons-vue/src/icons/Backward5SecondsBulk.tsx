// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward5SecondsBulkSvg from '@ant-design/icons-svg/lib/asn/Backward5SecondsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward5SecondsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward5SecondsBulk: Backward5SecondsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward5SecondsBulkSvg}></AntdIcon>;
};

Backward5SecondsBulk.displayName = 'Backward5SecondsBulk';
Backward5SecondsBulk.inheritAttrs = false;
export default Backward5SecondsBulk;