// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AutobrightnessBulkSvg from '@ant-design/icons-svg/lib/asn/AutobrightnessBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AutobrightnessBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AutobrightnessBulk: AutobrightnessBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AutobrightnessBulkSvg}></AntdIcon>;
};

AutobrightnessBulk.displayName = 'AutobrightnessBulk';
AutobrightnessBulk.inheritAttrs = false;
export default AutobrightnessBulk;