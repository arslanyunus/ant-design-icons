// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward15SecondsBulkSvg from '@ant-design/icons-svg/lib/asn/Backward15SecondsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward15SecondsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward15SecondsBulk: Backward15SecondsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward15SecondsBulkSvg}></AntdIcon>;
};

Backward15SecondsBulk.displayName = 'Backward15SecondsBulk';
Backward15SecondsBulk.inheritAttrs = false;
export default Backward15SecondsBulk;