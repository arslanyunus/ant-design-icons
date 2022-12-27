// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartHomeBulkSvg from '@ant-design/icons-svg/lib/asn/SmartHomeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartHomeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartHomeBulk: SmartHomeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartHomeBulkSvg}></AntdIcon>;
};

SmartHomeBulk.displayName = 'SmartHomeBulk';
SmartHomeBulk.inheritAttrs = false;
export default SmartHomeBulk;