// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward5SecondsBulkSvg from '@ant-design/icons-svg/lib/asn/Forward5SecondsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward5SecondsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward5SecondsBulk: Forward5SecondsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward5SecondsBulkSvg}></AntdIcon>;
};

Forward5SecondsBulk.displayName = 'Forward5SecondsBulk';
Forward5SecondsBulk.inheritAttrs = false;
export default Forward5SecondsBulk;