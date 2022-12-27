// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChromeBulkSvg from '@ant-design/icons-svg/lib/asn/ChromeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChromeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChromeBulk: ChromeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeBulkSvg}></AntdIcon>;
};

ChromeBulk.displayName = 'ChromeBulk';
ChromeBulk.inheritAttrs = false;
export default ChromeBulk;