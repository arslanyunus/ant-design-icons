// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FirstlineBulkSvg from '@ant-design/icons-svg/lib/asn/FirstlineBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FirstlineBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FirstlineBulk: FirstlineBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FirstlineBulkSvg}></AntdIcon>;
};

FirstlineBulk.displayName = 'FirstlineBulk';
FirstlineBulk.inheritAttrs = false;
export default FirstlineBulk;