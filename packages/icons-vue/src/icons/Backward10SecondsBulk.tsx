// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward10SecondsBulkSvg from '@ant-design/icons-svg/lib/asn/Backward10SecondsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward10SecondsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward10SecondsBulk: Backward10SecondsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward10SecondsBulkSvg}></AntdIcon>;
};

Backward10SecondsBulk.displayName = 'Backward10SecondsBulk';
Backward10SecondsBulk.inheritAttrs = false;
export default Backward10SecondsBulk;